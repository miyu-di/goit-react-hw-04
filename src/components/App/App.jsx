import axios from "axios";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "../ImageModal/ImageModal";

export default function App() {
  const [response, setResponse] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({});

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    async function fetchImages() {
      try {
        setIsLoading(true);
        const images = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=bsgCsyqRc9DRyY2ef_sArTDB-pwvLOhtypbJ1hpGcA8&page=${page}&per_page=8&query=${searchQuery}`
        );
        if (page === 1) {
          setResponse(images.data.results);
        } else {
          setResponse((prevResponse) => [
            ...prevResponse,
            ...images.data.results,
          ]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (searchQuery.trim() !== "") {
      fetchImages();
    }
  }, [searchQuery, page]);

  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setResponse([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={response} handleModal={handleModal} />
      )}
      {isLoading && <Loader />}
      {response.length > 0 && !isLoading && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          image={modalImage}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
