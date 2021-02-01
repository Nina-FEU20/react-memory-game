import React, { useEffect } from "react";

function FetchImages(props) {
  useEffect(() => {
    async function getImages() {
      const key = "e97530c4db33a4ae21d65f765fe9c551";
      const response = await fetch(
        `https://www.flickr.com/services/rest/?api_key=${key}&method=flickr.photos.search&text=animal&format=json&nojsoncallback=1&page=2&page=1`
      );
      const data = await response.json();

      const fetchedImages = [];
      for (let i = 0; i < 8; i++) {
        fetchedImages.push(getImageUrl(data.photos.photo[i]));
        fetchedImages.push(getImageUrl(data.photos.photo[i]));
      }

      props.setImages(shuffle(fetchedImages));
    }

    getImages();
  }, []);

  function getImageUrl(photo) {
    let size = "q";
    let imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

    return imgUrl;
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  return null;
}

export default FetchImages;
