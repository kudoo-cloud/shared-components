export type DataImportsProps = {
  requiredFields: {
    date: Date,
    amount: number,
    description: string
  },
  supportedFormats: Array<string>
  importEntity: string
  classes: any
};

export type DataImportsState = {
  wizardStep: Array<object>
};
