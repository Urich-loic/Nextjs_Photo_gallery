import { NextRequest } from "next/dist/server/web/spec-extension/request";
import {Comments} from "./data"


// export async function GET(){
//     return Response.json(Comments);
// }


export async function POST(request:Request){
    const comments = await request.json();
    const newcomment = {
        id:Comments.length + 1,
        text:comments.comment
    };

    Comments.push(newcomment);

   return new Response(JSON.stringify(newcomment, {
    headers:{
        "content-type":"application/json"
    },
    status:201
   }))
}

export async function GET(request:NextRequest, {params}:{
    params:{
        id:string
    }
}){
    const searchParama = request.nextUrl.searchParams;
    const query = (searchParama.get('query'));

    const filterdTerms = query ? Comments.filter(comment=>comment.comment.includes(query) ):Comments
    return Response.json(filterdTerms);
}