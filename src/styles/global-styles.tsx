import { createGlobalStyle } from "styled-components";

//`normalize`로 기본 css 초기화
const GlobalStyle = createGlobalStyle`
a {
  color: inherit;
  text-decoration: none;
}
html, body{
  height: 100%;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; 
  ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
  }
}
html{
  font-size: 10px;
}
input{
  
  line-height: 2rem;
  ::placeholder{
    color: #BBBBBB;
  }
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  font-family: "Nanum Gothic", "Noto Sans KR", "Apple SD Gothic Neo", Sans-serif;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
strong {
  font-weight: 600;
}
ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

head {
  display: block;
}

* {
  box-sizing: border-box;
  word-break: keep-all;
}

pre {
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word;
}
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration,
input[type=search]::-webkit-search-results-button,
input[type=search]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

textarea:focus, input:focus{
    outline: none;
}

`
export default GlobalStyle;
