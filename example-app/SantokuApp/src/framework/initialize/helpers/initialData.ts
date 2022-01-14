type TermsAgreement = {
  hasAgreedValidTermsOfService: boolean;
  agreedTermsOfServiceVersion: string;
};

export type InitialData = {
  terms?: TermsAgreement;
};

const loadInitialDataAsync = async (): Promise<InitialData> => {
  // 利用規約同意状態を取得
  const terms = await getAccountMeTerms();
  return {
    terms,
  };
};

// OpenAPI generatorで生成されたコードを導入するまでの一時的なMock
const getAccountMeTerms = async () => {
  return await new Promise<TermsAgreement>(resolve =>
    setTimeout(
      () =>
        resolve({
          hasAgreedValidTermsOfService: false,
          agreedTermsOfServiceVersion: '1.0.0',
        }),
      100,
    ),
  );
};

export {loadInitialDataAsync};
