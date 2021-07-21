import { Link } from "react-router-dom"
import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/3761196/pexels-photo-3761196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    <Link className="link" to="/post/:1">Lorem ipsum dolor sit amet</Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Architecto quasi maxime nam modi, laboriosam iste cumque voluptatem perspiciatis atque delectus, 
                labore illo consequatur eos tempora distinctio perferendis. Sunt, consectetur error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Architecto quasi maxime nam modi, laboriosam iste cumque voluptatem perspiciatis atque delectus, 
                labore illo consequatur eos tempora distinctio perferendis. Sunt, consectetur error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Architecto quasi maxime nam modi, laboriosam iste cumque voluptatem perspiciatis atque delectus, 
                labore illo consequatur eos tempora distinctio perferendis. Sunt, consectetur error.
            </p>
        </div>
    )
}
