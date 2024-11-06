import * as fs from "fs";

export const loadEmailTemplate = (
  propertyName: string,
  to: string,
): string => {
  let template = fs.readFileSync("src/email_template/index.html", "utf8");

  template = template.replace("{{propertyName}}", propertyName);
  template = template.replace("{{to}}", to);

  return template;
};
