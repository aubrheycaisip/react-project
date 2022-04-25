import React from "react";
import Blog from "./Blog.js";
import BlogData from "../../Data/BlogData.json";
import BlogTypeContext from "./Context.js";

const blogType = { happy: ":)", sad: ":(" };

function BlogList(props) {
    return (
        <BlogTypeContext.Provider value={blogType.happy}>
            <div>
                {BlogData.map((blogDetail, index) => {
                    return (
                        <Blog
                            title={blogDetail.title}
                            key={index}
                            BlogTypeContext={BlogTypeContext}
                        />
                    );
                })}
            </div>
        </BlogTypeContext.Provider>
    );
}

export default BlogList;
