import { pollsModel } from "../models/polls.models";
import moment from 'moment';
export class PollService {
  async findAll() {
    try {
      const data: any = await pollsModel.findAll({ raw: true })
      if (!data) return { success: false, message: "ไม่พบข้อมูล" };

      return {
        success: true, data
      };

    } catch (err) {
      return err;
    }
  }
  async findOne(id: string) {
    try {
      const data: any = await pollsModel.findOne({ where: { id }, raw: true })
      if (!data) return { success: false, message: "ไม่พบข้อมูล" };

      return {
        success: true, data
      };

    } catch (err) {
      return err;
    }
  }
  async create(req: any) {
    try {
      const data: any = await pollsModel.create(req)
      if (!data) return { success: false, message: "เพิ่มข้อมูลไม่สำเร็จ" };

      return {
        success: true, data
      };

    } catch (err) {
      return err;
    }
  }
  async update(id: string, req: any) {
    try {
      const data: any = await pollsModel.update(req, { where: { id }, returning: true });
      console.log("🚀 ~ update ~ data:", data);
      if (!data) return { success: false, message: "แก้ไขไม่สำเร็จ" };

      return {
        success: true, message: "แก้ไขสำเร็จ"
      };

    } catch (err) {
      return err;
    }
  }
  async delete(id: string) {
    try {
      const data: any = await pollsModel.destroy({ where: { id } });
      if (!data) return { success: false, message: "ลบไม่สำเร็จ" };

      return {
        success: true, message: "ลบสำเร็จ"
      };

    } catch (err) {
      return err;
    }
  }

}
