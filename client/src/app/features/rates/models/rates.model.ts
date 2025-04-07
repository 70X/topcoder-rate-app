import { Utility } from '@core/models/utility.model'

export enum StatusType {
  COMPLETE = 'Complete',
  FAIL = 'Fail'
}

export enum InquiryFileType {
  GROUP = 'group',
  SUBSCRIBER = 'subscriber'
}

export interface RateFile {
  filename: string;
  fileurl: string;
  userId: string;
  createDate: Date;
  status: StatusType;
}

export interface RateInquiryInfo {
  groupIds: string;
  fromDate: Date;
  toDate: Date;
}

export interface RateInquiryFile {
  type: InquiryFileType;
  file: File;
  fromDate: Date;
  toDate: Date;
}

export class RateDeserialize {
  public static rateFile = (record: any): RateFile => ({
    filename: record.filename,
    fileurl: record.fileurl,
    userId: record.userid,
    createDate: record.createDate ? Utility.readDateFromUTC(new Date(record.createDate)) : null,
    status: record.status
  })
}

export class RateSerialize {

  public static rateInquiryInfo = (rate: RateInquiryInfo): any => ({
    groupId: rate.groupIds,
    fromDate: Utility.saveDateInUTC(rate.fromDate),
    toDate: Utility.saveDateInUTC(rate.toDate),
  })

  public static rateInquiryFile = (rate: RateInquiryFile): any => ({
    fromDate: Utility.saveDateInUTC(rate.fromDate),
    toDate: Utility.saveDateInUTC(rate.toDate),
  })
}
