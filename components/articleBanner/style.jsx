import styled from 'styled-components'
export const ArticleBanner = styled.aside`
    background-image:url(${props=> props.imageUrl});
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
`