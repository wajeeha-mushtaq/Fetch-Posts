import React from "react";
import { useParams } from "react-router-dom";

export default function SinglePost(){
  var {id} = useParams();
  return(
  <div>
      <h1>Post Details</h1>
      ID: {id}
  </div>
  );
}
