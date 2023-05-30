import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductForm } from "../../schema/ProductForm";
import "./style.scss";
import {Helmet} from "react-helmet";
import axios from "axios";
export const AddProduct = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductForm),
  });
  const postData = async () => {
    const values = getValues();
    await axios.post("http://localhost:9090/users", {
      name: values.name,
      title: values.title,
    });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="inpp">
        <form onSubmit={handleSubmit(postData)}>
          <label htmlFor="">Name</label>
          <input {...register("name")} />
          {errors.name?.message && <p>{errors.name?.message}</p>}
          <label htmlFor="">Title</label>
          <input {...register("title")} />
          {errors.title?.message && <p>{errors.title?.message}</p>}
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};
