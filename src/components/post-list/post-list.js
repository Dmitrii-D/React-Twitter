import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';

import nanoid from 'nanoid';

import styled from 'styled-components';

const PostListStyle = styled.div`
    padding: 20px 35px 10px 35px;
    margin-top: 10px;
    margin-top: 50px;
`

const PostList = ({posts,onDelete, onToggleImportant, onToggleLiked}) => {

    let elements = posts.filter((item) => {

        return item.constructor === Object;
        
    }).map((item) => {

        const {id, ...itemProps} = item;

        const randomId = nanoid();

        return (
            <PostListStyle key = {randomId} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete = {() => onDelete(id)}
                    onToggleImportant = {() => onToggleImportant(id)}
                    onToggleLiked = {() => onToggleLiked(id)}
                />
            </PostListStyle>
        )

    });

    return(
        <ListGroup className = 'app-list'>
            {elements}
        </ListGroup>
    )
}

export default PostList;