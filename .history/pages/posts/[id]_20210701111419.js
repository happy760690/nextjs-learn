/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 2021-07-01 10:19:25
 * @Editors: Mingjuan
 */
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'

export default function Post({ postData }) {
    return (
      <Layout>
        {/* Add this <Head> tag */}
        <Head>
            <title>{postData.title}</title>
        </Head>
        
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </Layout>
    )
  }

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }
