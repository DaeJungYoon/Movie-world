import React, { useState, useEffect } from "react";
import { searchApi } from "../api/movieApi";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputKeyword, setInputKeyword] = useState(searchParams.get("q") || "");
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const keyword = searchParams.get("q") || "";
    setInputKeyword(keyword); // URL 변경 시 input 동기화
    if (keyword) {
      fetchSearchResults(keyword); // 컴포넌트가 처음 렌더링될 때
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputKeyword(value);
    setSearchParams({ q: value }); // URL 쿼리 업데이트

    if (value.trim() !== "") {
      fetchSearchResults(value); // 입력될 때마다 검색 실행
    } else {
      setDatas([]); // 검색어가 비어있으면 데이터 초기화
    }
  };

  const fetchSearchResults = async (keyword) => {
    try {
      setLoading(true);
      setError(null);
      const searchData = await searchApi.getSearch(keyword);
      setDatas(searchData);
    } catch (err) {
      setError(
        err.response?.data?.status_message || "알 수 없는 에러가 발생했습니다."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={inputKeyword}
          onChange={handleInputChange}
          placeholder="검색어를 입력하세요"
        />
      </form>

      {renderContent()}
    </div>
  );

  function renderContent() {
    if (loading) return <div>로딩 중입니다...</div>;
    if (error) return <div>에러 발생: {error}</div>;
    if (datas.length === 0) return <div>검색 결과가 없습니다.</div>;

    return (
      <ul>
        {datas.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}
