import { render } from "@testing-library/react";
import
import { TranslationProvider } from "my-i18n-lib";
import defaultStrings from "i18n/en-x-default";

const AllTheProviders = ({ children }) => {
  return (
    <Provider theme="light">
      <TranslationProvider messages={defaultStrings}>
        {children}
      </TranslationProvider>
    </Provider>
  );
};

const customRender = (ui: any, options: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
