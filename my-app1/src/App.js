import React, { useEffect, useState } from "react";
import "./component/style/App.css";
import "./component/post";
import Postlist from "./component/postlist";
import Mybutton from "./component/button/mybuton";
import Myinput from "./component/input/myinput";
// import MySelect from "./component/mySelect";
import MyModal from "./component/MyModal/MyModal";
import axios from "axios";




function App() {
  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState({ title: "", body: "" });
  const [isLoadind,setIsLoading]=useState('false')

  const addnewpost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };
  
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  async function fetchPost(){
   setIsLoading("true")
   setTimeout( async ()=>{
    const resalt = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(resalt.data) 
    
   },1000)
   setIsLoading("false")
  
    
  }
  // useEffect(()=>{   
  //   fetchPost()
  // },[])


  //ՆԱԽԱՏԵՍՎԱԾ Է ԷՋԻ ԹԱՐՄԱՑՈՒՄԻՑ ՀԵՏՈ ՊԱՐՈՒՆԱԿՈՒԹՅՈՒՆԸ ՊԱՀՊԱՆԵԼՈՒ ՀԱՄԱՐ
  //տանում է առաջին արգումենտ քոլբեք ֆ., 2րդ զանգված,դատար զանգվածի դեպքում կկանչվի միայն մեկ անգա

  return (
    <div className="App">
       <div style={{display:"flex", justifyContent:"center",marginBottom:"20px"}}>
      <button  onClick={fetchPost}>Ներբեռնել</button>
      </div>
      <MyModal >  </MyModal>
      
      <form>
        <Myinput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="գրքի անվանումը"
        />
        <Myinput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="գրքի նկարագրությունը"
        />
        <Mybutton  onClick={addnewpost}>ԱՎԵԼԱՑՆԵԼ</Mybutton>
        {/* <div>
           { <MySelect defaultvalue='դասավորել ըստ...' 
           options={[
            {value:'title', name:"գրքի անվանման"},
            {value:'body', name:"գրքի նկարագրության"}
           ]}
           /> } 
        </div> */}
         
        

      </form>

      <Postlist remove={removePost} posts={posts} title='Կարդացած գրքերի ցանկ'/>
    
    

    </div>
  );
}

export default App;