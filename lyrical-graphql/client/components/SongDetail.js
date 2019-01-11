import React from 'react';
import { graphql } from "react-apollo";
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends React.Component {
    render() {
        const  { song } = this.props.data;
        if (!song) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
                <LyricList lyrics={song.lyrics} />
                <LyricCreate songId={song.id} />
            </div>
        );
    }
}

export default graphql(fetchSong, {
    options: (props) => ({variables: { id: props.params.id }})
})(SongDetail);