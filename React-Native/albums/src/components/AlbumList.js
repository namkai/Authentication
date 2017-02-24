import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response =>
            this.setState({ albums: response.data }));
    }
    renderAlbums() {
        const { albums } = this.state;

        return albums.map((album) => (
                <AlbumDetail key={album.title} album={album} />
            ));
    }
    render() {
        if (this.state.albums.length === 0) {
            return (
                <View>
                    <Text>Loading....</Text>
                </View>
            );
        }
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}


export default AlbumList;
