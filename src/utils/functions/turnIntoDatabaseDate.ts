const turnIntoDatabaseDate = (date: Date) => date.toISOString().split("T")[0];

export default turnIntoDatabaseDate;
