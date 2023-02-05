import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const API_KEY = 'AIzaSyCfyolB-xHPHwm3b_PFHiniMImG4fcRVX4';
import places from '../components/Post/data'
import CustomMarker from '../components/CustomMarker';
import PostCarouselItem from '../components/Post/PostCarouselItem';

const SearchResultsMap = (props) => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null)
    const flatlist = useRef();
    const map = useRef();

    const width = useWindowDimensions().width;
    const viewConfig = useRef({ itemVisiblePercentThreshold: 30 })
    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id)
        }
    })
    useEffect(() => {
        if (!selectedPlaceId || !flatlist) {
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({ index })
        const selectedPlace = places[index];
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8
        }
        map.current.animateToRegion(region)
    }, [selectedPlaceId])
    return (
        <View style={{ width: '100%', height: '100%' }}>
            <MapView
                ref={map}
                provider={MapView.PROVIDER_GOOGLE}
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                    latitude: 28.4815637,
                    longitude: -16.2991304,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                customMapStyle={[]}
                showsUserLocation={true}
                zoomControlEnabled={true}
                zoomEnabled={true}
                rotateEnabled={true}
                apiKey={API_KEY}
            >
                {places.map(place =>
                    <CustomMarker
                        key={place.id}
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />
                )}
            </MapView>
            <View style={{ position: 'absolute', bottom: 10 }}>
                <FlatList
                    ref={flatlist}
                    data={places}
                    renderItem={({ item }) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    onViewableItemsChanged={onViewChanged.current}
                    viewabilityConfig={viewConfig.current}
                />
            </View>
        </View>
    );
};



export default SearchResultsMap