import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillAndroid, AiFillSetting } from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";
import "./style.scss";
import {Helmet} from "react-helmet";
export const Detail = () => {
  const [data, setData] = useState("");
  const params = useParams();
  const detail = async () => {
    const res = await axios.get(`http://localhost:9090/users/${params.id}`);
    setData(res.data);
  };
  useEffect(() => {
    detail();
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <div className="back-datas">
          <div className="card-txt">
            <div className="card-icon">
              <AiFillAndroid />
            </div>
            <h3>{data.name}</h3>
            <p>{data.title}</p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </div>
    </>
  );
};
