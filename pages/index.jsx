import React, { useState, useEffect, useRef } from "react";
import BlogsSectionComponent from "../components/blogsSection";
import InitialLoadingComponent from "../components/initialLoading";
import LoadingComponent from "../components/loading";
import getBlogsService from "../services/home/getBlogs";

export const getStaticProps = async () => {
  let actualPage = 1;
  let loadedBlogsSections = [];
  const primarySection = await getBlogsService({
    itemsByPage: 6,
    numberOfPage: actualPage,
    quicksearch: "",
  });

  loadedBlogsSections = [{ blogs: primarySection.data }];
  const allBlogsAreLoaded =
    primarySection.data.length < primarySection.filter.itemsByPage;

  if (!allBlogsAreLoaded) {
    actualPage++;
    const secondarySection = await getBlogsService({
      itemsByPage: 6,
      numberOfPage: 2,
      quicksearch: "",
    });
    loadedBlogsSections = [
      ...loadedBlogsSections,
      { blogs: secondarySection.data },
    ];
  }

  return {
    props: {
      actualPage,
      loadedBlogsSections,
      allBlogsAreAlreadyLoaded: allBlogsAreLoaded,
    },
  };
};

export default function Home({
  actualPage,
  loadedBlogsSections,
  allBlogsAreAlreadyLoaded,
}) {
  const [initialLoading, setInitialLoading] = useState(false);
  const [loadingSection, setLoadingSection] = useState(false);
  const [page, setPage] = useState(actualPage);
  const [allBlogsLoaded, setAllBlogsLoaded] = useState(
    allBlogsAreAlreadyLoaded
  );
  const [blogsSection, setBlogsSection] = useState(loadedBlogsSections);

  useEffect(() => {
    if (allBlogsLoaded) return;
    fetchBlogs();
  }, [page]);

  const sectionEndRef = useRef(null);
  useEffect(() => {
    if (allBlogsLoaded) return;
    const intersectionObserver = new IntersectionObserver((e) => {
      if (e.some((entry) => entry.isIntersecting)) {
        console.log("Fetching blogs by intersecting...");

        setPage((state) => state + 1);
      }
    });
    if (sectionEndRef.current)
      intersectionObserver.observe(sectionEndRef.current);
    return () => intersectionObserver.disconnect();
  }, [sectionEndRef, allBlogsLoaded]);

  const fetchBlogs = async () => {
    try {
      const pageAlreadyLoaded = actualPage;
      if (page == pageAlreadyLoaded) return;
      setLoadingSection(true);
      const json = await getBlogsService({
        itemsByPage: 6,
        numberOfPage: page,
        quicksearch: "",
      });
      setLoadingSection(false);

      const allBlogsAreLoaded = json.data.length < json.filter.itemsByPage;

      if (allBlogsAreLoaded) setAllBlogsLoaded(true);
      if (initialLoading) setInitialLoading(false);

      setBlogsSection([...blogsSection, { blogs: json.data }]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      {initialLoading && <InitialLoadingComponent />}
      {blogsSection.map((section, index) => {
        return <BlogsSectionComponent key={index} blogs={section.blogs} />;
      })}
      <div ref={sectionEndRef}></div>
      {loadingSection && !initialLoading && <LoadingComponent />}
    </div>
  );
}
