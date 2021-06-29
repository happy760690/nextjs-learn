/*
 * @Name: 文件名称
 * @Description: 该文件描述
 * @Author: Mingjuan
 * @Date: 2021-06-29 11:22:19
 * @Editors: Mingjuan
 */
import Link from "next/link"

export default function FirstPost(){
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    Back to home
                </Link>
            </h2> 
        </>
    )
}