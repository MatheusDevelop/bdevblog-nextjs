import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { WriteByBarStyle } from "../../components/articleWriteByBar/style";
import DateComponent from "../../components/date";
import InitialLoadingComponent from "../../components/initialLoading";
import MaterialIcon from "../../components/materialIcon";
import TextComponent from "../../components/text";
import getArticle from "../../services/article/getArticle";
import ReactPlayer from "react-player";
import getBlogsService from "../../services/home/getBlogs";

export default function Article({ article }) {
  const { isFallback } = useRouter();
  if (isFallback) return <InitialLoadingComponent />;
  const url = "";
  return (
    <div className="container">
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={article.title.substring(0,3)} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <div className="row" style={{ height: "600px" }}>
        <section className="col-lg">
          <article>
            <TextComponent h1>{article.title}</TextComponent>
          </article>
          <div className="mt-5">
            <MaterialIcon iconName={"south"} size={45} />
          </div>
        </section>
        <aside className="col-lg-8">
          <Image
            src={article.imageUrl}
            layout="responsive"
            width={"450"}
            height="300"
          />
        </aside>
      </div>
      <div className="row mt-5">
        <div className="col-lg mb-5">
          <WriteByBarStyle />
          <TextComponent p>
            Escrito por
            <br />
            <b>Matheus Barbosa</b>
          </TextComponent>
          <DateComponent date={article.createdAt} />
        </div>
        <main className="col-lg-8 pb-5 mb-5 mt-0">
          {article.attributes.map((attribute, idx) => {
            if (attribute.type == 1)
              return (
                <div key={idx} className={idx != 0 ? "mt-5" : "mt-0"}>
                  <TextComponent h2>{attribute.value}</TextComponent>
                </div>
              );
            if (attribute.type == 2)
              return (
                <div key={idx} className="mt-2">
                  <TextComponent p>{attribute.value}</TextComponent>
                </div>
              );
            if (attribute.type == 3)
              return (
                <div key={idx} className="mt-4">
                  <Image
                    src={attribute.value}
                    layout="responsive"
                    height="300"
                    width="300"
                  />
                </div>
              );
            if (attribute.type == 4)
              return (
                <div className="mt-4">
                  <ReactPlayer url={attribute.value} />
                </div>
              );
          })}
        </main>
      </div>
    </div>
  );
}
export const getStaticPaths = async () => {
  const blogs = await getBlogsService({
    itemsByPage: 20,
    numberOfPage: 1,
  });
  const paths = blogs.data.map((blog) => ({ params: { articleId: `${blog.id}` } }));
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const { articleId } = context.params;
  const article = await getArticle(articleId);
  return {
    props: {
      article,
    },
  };
};