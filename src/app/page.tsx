import React from "react";
import Movie from "./movie";

type Props = {};

export default async function Home({}: Props) {

  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
  //https://api.themoviedb.org/3/movie/popular?api_key=
  console.log(url);
  const data = await fetch(url);
  console.log(data);
  const res = await data.json();
  console.log(res);
  await delay(1000);

  return (
    <div>
      <div className="grid gap-2 grid-cols-fluid">
      {res.results.map((movie: any) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}