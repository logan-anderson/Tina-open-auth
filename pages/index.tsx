import Head from "next/head";
import { BlocksControls, InlineTextarea } from "react-tinacms-inline";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { GetStaticProps } from "next";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";

export default function Home({ file }) {
  const formOptions = {
    label: "Home Page",
    fields: [
      {
        label: "Title",
        name: "title",
        component: "text",
      },
    ],
  };
  const [data, form] = useGithubJsonForm(file, formOptions);

  useGithubToolbarPlugins();

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{data.title}</h1>
        <h3>{data.subtitle}</h3>
        <BlocksControls index={file}>
          <InlineTextarea name="text" />
        </BlocksControls>
      </main>
    </div>
  );
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/home.json",
      parse: parseJson,
    });
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../content/home.json")).default,
      },
    },
  };
};
