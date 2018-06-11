import React, { Component } from 'react'
import ArticleInfo from './ArticleAuthor'
import ArticleBody from './ArticleBody'
import ArticleLinks from "./ArticleLinks"

class Article extends Component{
    render(){
        return(
            <div className="large-8 medium-12 columns article">
              <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
              <ArticleInfo />
              <ArticleBody />
              <ArticleLinks />
            </div>
        )

    }
}

export default Article