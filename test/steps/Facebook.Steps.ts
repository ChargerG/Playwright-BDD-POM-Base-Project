import { createBdd } from 'playwright-bdd';
import { LoginAction } from '../actions/LoginAction';
import { NavigationAction } from '../actions/NavigationAction';
const { Given, When, Then } = createBdd();

Given('el usuario ingresa a la página de Facebook', async ({page}) => {
  await NavigationAction.toDo(page).navigateToFacebook();
});

When('el usuario diligencia un email y contraseña inválidos', async ({page}) => {
    await LoginAction.toDo(page).submitLogin();
});

Then('debe aparecer un mensaje de error', async ({page}) => {
  await LoginAction.toDo(page).errorToLogin();
});
