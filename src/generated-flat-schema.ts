/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserNameMutation
// ====================================================

export interface UpdateUserNameMutation_updateUserName {
  __typename: "User";
  name: string;
}

export interface UpdateUserNameMutation {
  updateUserName: UpdateUserNameMutation_updateUserName | null;
}

export interface UpdateUserNameMutationVariables {
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewerQuery
// ====================================================

export interface ViewerQuery_viewer {
  __typename: "User";
  id: string;
  name: string;
  status: string;
}

export interface ViewerQuery {
  viewer: ViewerQuery_viewer | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
