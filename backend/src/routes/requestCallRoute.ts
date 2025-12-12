import { Router, Request, Response } from "express";
import RequestCall from "../models/requestCall";
import ExcelJS from "exceljs";

const router = Router();
router.post("/request-call-form", async (req: Request, res: Response) => {

  try {

    const { name, email, phone, age, description, timestamp } = req.body;

    console.log("--------------------");
    console.log("--------------------");
    console.log("--------------------");
    console.log(name, email, phone);

    if (!name || !phone || !age || !description) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }
    const newRequest = new RequestCall({
      name,
      email,
      phone,
      age,
      description,
      timestamp,
    });
    await newRequest.save();
    return res.status(201).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error saving request:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});
router.get("/download-request-calls", async (req: Request, res: Response) => {
  try {
    const data = await RequestCall.find().lean();

    if (!data.length) {
      return res.status(404).json({
        success: false,
        message: "No request call data found",
      });
    }

    // Create Workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Request Calls");

    // Define headers
    worksheet.columns = [
      { header: "Name", key: "name", width: 20 },
      { header: "Email", key: "email", width: 25 },
      { header: "Phone", key: "phone", width: 15 },
      { header: "Age", key: "age", width: 10 },
      { header: "Description", key: "description", width: 40 },
      { header: "Timestamp", key: "timestamp", width: 25 },
    ];

    // Add rows
    data.forEach((row) => {
      worksheet.addRow({
        name: row.name,
        email: row.email,
        phone: row.phone,
        age: row.age,
        description: row.description,
        timestamp: row.timestamp,
        // createdAt: row.createdAt,
      });
    });

    // Set file headers
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=request-calls.xlsx"
    );

    // Write file to response
    await workbook.xlsx.write(res);
    res.status(200).end();
  } catch (error) {
    console.error("Excel download error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while generating Excel file",
    });
  }
});
export default router;