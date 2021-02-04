import React from "react";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";
import { renderWithReduxAndRouter } from "../utils/tests/test-utils";
import makeTestingServer from "../utils/tests/make-testing-server";
import allRecipesResponse from "../utils/tests/recipes/all-recipes.json";
import singleRecipeResponse from "../utils/tests/recipes/single-recipe.json";
import recipeCommentResponse from "../utils/tests/recipes/recipe-comments.json";
import { signUp } from "../redux/user/user-actions";

const testUser = {
  name: "test_user_name",
  lastname: "test_user_lastname",
  email: "test_user_email",
  password: "test_user_password",
};

const testPayload = {
  name: "test_user_name",
  lastname: "test_user_lastname",
  email: "test_user_email",
  token: "test_user_token",
};

const userData = {
  testUser,
  testPayload,
};

/**
 * Based on the AAA principle,
 * These test will describe the end user intentions with the app.
 * Because of this, they are mostly integration tests
 *
 * More: https://kentcdodds.com/blog/write-tests
 */

describe("App behaviour", () => {
  const server = makeTestingServer({
    userData,
    recipesData: {
      allRecipesResponse,
      singleRecipeResponse,
      recipeCommentResponse,
    },
  });

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it("should be defined", () => {
    expect(App).toBeDefined();
  });

  describe("route [/]", () => {
    describe("Application [Header]", () => {
      it(`should contain the right content`, () => {
        const { getByText } = renderWithReduxAndRouter(<App />);
        expect(
          getByText("Assembler School Recipes", { exact: false })
        ).toBeInTheDocument();

        expect(getByText("Registrar", { exact: false })).toBeInTheDocument();

        expect(getByText("Login", { exact: false })).toBeInTheDocument();
      });
    });

    describe("Application [Hero]", () => {
      it(`should contain the right content`, () => {
        const { getByText } = renderWithReduxAndRouter(<App />);
        expect(
          getByText("Descubre nuestras mejores recetas", { exact: false })
        ).toBeInTheDocument();

        expect(
          getByText("Nuestros expertos cocineros", { exact: false })
        ).toBeInTheDocument();
      });
    });

    describe("Application [Recipes]", () => {
      it(`should contain the right content when loading`, () => {
        const { getByText } = renderWithReduxAndRouter(<App />);

        expect(
          getByText("Cargando recetas...", { exact: false })
        ).toBeInTheDocument();
      });

      it(`should contain the right content once its loaded`, async () => {
        const { queryByText, queryAllByText } = renderWithReduxAndRouter(
          <App />
        );

        await waitFor(() =>
          expect(queryByText("recipe-3-name")).toBeInTheDocument()
        );
        const items = await queryAllByText(/Tiempo Estimado/);

        expect(items).toHaveLength(3);
      });

      it("should be able to navigate to a recipe's detail", async () => {
        const { getByTestId, getByText } = renderWithReduxAndRouter(<App />);

        await waitFor(() =>
          expect(getByTestId("recipe-card-3")).toBeInTheDocument()
        );
        userEvent.click(getByTestId("recipe-card-3"));

        await waitFor(() =>
          expect(
            getByText("Gordon Ramsay", { exact: false })
          ).toBeInTheDocument()
        );

        expect(getByText("Pasta")).toBeInTheDocument();
        expect(getByText("Ketchup")).toBeInTheDocument();
        expect(getByText("Mayonesa")).toBeInTheDocument();
        expect(getByText("Bacon")).toBeInTheDocument();
      });

      it("should be able to add a new comment to a recipe", async () => {
        const {
          queryByTestId,
          getByTestId,
          getByText,
          store,
        } = renderWithReduxAndRouter(<App />);

        await waitFor(() =>
          expect(getByTestId("recipe-card-3")).toBeInTheDocument()
        );

        userEvent.click(getByTestId("recipe-card-3"));

        await waitFor(() =>
          expect(
            getByText("Gordon Ramsay", { exact: false })
          ).toBeInTheDocument()
        );

        expect(queryByTestId("recipe-new-comment")).toBeFalsy();

        store.dispatch(signUp(testUser));

        await waitFor(() =>
          expect(getByTestId("recipe-new-comment")).toBeInTheDocument()
        );

        const comment = "test_comment_body";

        userEvent.click(getByTestId("recipe-new-comment"));

        userEvent.type(getByTestId("recipe-textarea"), comment);

        userEvent.click(getByTestId("recipe-send-comment"));

        await waitFor(() => expect(getByText(comment)).toBeInTheDocument());
      });
    });

    describe("Application [Footer]", () => {
      it(`should contain the right content`, () => {
        const { getByText } = renderWithReduxAndRouter(<App />);
        expect(
          getByText("Assembler School MERN Starter", { exact: false })
        ).toBeInTheDocument();
      });
    });
  });

  describe("route [/sign-up]", () => {
    const route = "/sign-up";

    describe("Application [Form]", () => {
      it(`should contain the right content`, () => {
        const { getByText } = renderWithReduxAndRouter(<App />, route);
        expect(
          getByText("Nuevo usuario", { exact: false })
        ).toBeInTheDocument();

        expect(getByText("Nombre", { exact: false })).toBeInTheDocument();

        expect(getByText("Apellido", { exact: false })).toBeInTheDocument();
      });

      it(`should be able to create a new user`, async () => {
        const { getByTestId } = renderWithReduxAndRouter(<App />, route);
        userEvent.type(getByTestId("signup-form-email"), "test@test.com");
        userEvent.type(getByTestId("signup-form-name"), "test");
        userEvent.type(getByTestId("signup-form-lastname"), "recipes");
        userEvent.type(getByTestId("signup-form-password"), "123supersecure");

        const cta = getByTestId("signup-form-cta");
        userEvent.click(cta);

        await waitFor(() =>
          expect(getByTestId("header-logout")).toBeInTheDocument()
        );
      });
    });
  });

  describe("route [/login]", () => {
    const route = "/login";

    describe("Application [Form]", () => {
      it(`should contain the right content`, () => {
        const { getByText } = renderWithReduxAndRouter(<App />, route);

        expect(getByText("Email", { exact: false })).toBeInTheDocument();

        expect(getByText("Contraseña", { exact: false })).toBeInTheDocument();
      });

      it(`should be able to login with a user`, async () => {
        const { getByTestId } = renderWithReduxAndRouter(<App />, route);
        userEvent.type(getByTestId("login-form-email"), "test@test.com");
        userEvent.type(getByTestId("login-form-password"), "123supersecure");

        const cta = getByTestId("login-form-cta");
        userEvent.click(cta);

        await waitFor(() =>
          expect(getByTestId("header-logout")).toBeInTheDocument()
        );
      });
    });
  });
});
