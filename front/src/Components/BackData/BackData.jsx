import React, { useEffect, useState } from "react";
import { AiFillAndroid, AiFillSetting } from "react-icons/ai";
import { MdPhotoCamera } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import axios from "axios";
export const BackData = () => {
    const navigate=useNavigate()
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:9090/users");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  const Deleted = async (id) => {
    await axios.delete(`http://localhost:9090/users/${id}`);
    getData();
  };
  const [value, setValue] = useState("");
  const Search = (e) => {
    setValue(e.target.value);
  };
  const [sorting, setSoring] = useState(true);
  const Sorted = () => {
    let array = [];
    if (sorting === true) {
      setSoring (false);
      array = [...data].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      setSoring(true);
      array = [...data].sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    setData(array);
  };
  return (
    <div>
      <div className="container">
        <div className="cards">
        <div className="inp">
        
          <input type="text" onChange={Search} placeholder="Search by name" />
          <button onClick={Sorted}>Sorted</button>
        </div>
          <div className="card">
            <div className="back-data">
              {data
              .filter((item)=>item.name.toLowerCase().includes(value.toLowerCase()))
              .map((d) => (
                <div className="card-txt">
                  <div className="card-icon">
                    <AiFillAndroid />
                  </div>
                  <h3>{d.name}</h3>
                  <p>{d.title}</p>
                  <button>LEARN MORE</button>
                  <button onClick={() => Deleted(d._id)}>DELETE</button>
                  <button onClick={()=>navigate(d._id)}>DETAIL</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
