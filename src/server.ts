import express from "express";
import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";

let server: Server;

const run = async () => {
	try {
		// await mongoose.connect("");
		server = app.listen(5000, () => {
			console.log("server is running");
		});
	} catch (error) {
		console.log(error);
	}
};
run();
