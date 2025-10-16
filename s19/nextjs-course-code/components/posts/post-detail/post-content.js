import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function PostContent(props) {
  const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`;

  const customComponents = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${props.post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
          layout="responsive"
        />
      );
    },

    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0]?.tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${props.post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
              layout="responsive"
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const match = /language-(\w+)/.exec(className || "");
      const language = match ? match[1] : "";

      if (language) {
        return (
          <SyntaxHighlighter language={language} style={atomDark} PreTag="div">
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        );
      }

      return <code className={classes.inlineCode}>{children}</code>;
    },
  };

  // Return principale del componente
  return (
    <article className={classes.content}>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {props.post.content}
      </ReactMarkdown>
    </article>
  );
}
