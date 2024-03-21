import { redirect } from "next/navigation";
import { Comments } from "../data";

export async function GET(request:Request, {params}:{
    params:{
        id:string
    }
}){
    if(parseInt(params.id) > Comments.length){
        redirect('/comments')
    }
    const comments = Comments.find(comment=> comment.id === parseInt(params.id))
    return Response.json(comments);
}


export async function PATCH(request:Request, {params}:{
    params:{
        id:string
    }
}){
    const body = await request.json();

    const { comment } = body;
    const Index = Comments.findIndex(commentIn => commentIn.id === parseInt(params.id) )
    Comments[Index].comment = comment
    return Response.json(Comments[Index]);
}


export async function DELETE(request:Request, {params}:{
    params:{
        id:string
    }
}){

    const Index = Comments.findIndex(commentIn => commentIn.id === parseInt(params.id) )
    const deletedCOmment = Comments[Index];

    Comments.splice(Index, 1)
    return Response.json(deletedCOmment);
}
