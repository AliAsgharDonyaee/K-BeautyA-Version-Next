import mongoose from "mongoose";

// const connection = [];

async function DbConnect() {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.info(`✅ \x1b[32m- MongoDB connected\x1b[0m`);
		// connection.isConnected = db.connection[0].readyState;
	} catch (err) {
		console.error("🗿 \x1b[31m- Failed to connect to MongoDB\x1b[0m", err);
	}
}

export default DbConnect;
