import { connect } from "mongoose";

const URL: string =
  "mongodb+srv://dennisozoemena08:Dennis11..@cluster0.shpr0lg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const dbConfig = async () => {
  try {
    return await connect(URL).then(() => {
      console.log("Database Connected✈️✈️✈️✈️ ");
    });
  } catch (error: any) {
    return error;
  }
};
