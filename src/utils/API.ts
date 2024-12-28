export default class API {
  private _devApiUrl: string = "http://localhost:9000/api/v1";

  public get apiUrl() {
    return this._devApiUrl;
  }

  async getData(url: string, token?: string | null) {
    let response = null;
    token ? (response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
  ) : (
    response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: token ? "Bearer " + token : "",
      },
    })
  );
    const responseJson = await response.json();
    // console.log(responseJson)
    return responseJson;
  }

  async postData(
    url: string,
    datas?: any,
    token?: string | null,
    isMultipart?: boolean | null
  ) {
    let response = null;
    isMultipart
      ? (response = await fetch(url, {
          method: "POST",
          headers: {
            // "Content-Type": "multipart/form-data",
            Authorization: token ? "Bearer " + token : "",
          },
          body: datas,
        }))
      : token ? (response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: datas,
        }))
        : (response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            //   Authorization: "Bearer " + token,
            },
            body: datas,
          }));
    const responseJson = await response.json();
    // console.log(responseJson)
    return responseJson;
  }

  async putData(
    url: string,
    datas: any,
    token: string | null,
    isMultipart?: boolean | null
  ) {
    let response = null;
    isMultipart
      ? (response = await fetch(url, {
          method: "PUT",
          headers: {
            // "Content-Type": "multipart/form-data",
            Authorization: token ? "Bearer " + token : "",
          },
          body: datas,
        }))
      : (response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? "Bearer " + token : "",
          },
          body: datas,
        }));
    const responseJson = await response.json();
    // console.log(responseJson)
    return responseJson;
  }

  async deleteData(url: string, token?: string | null, datas?: any) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
      body: datas,
    });
    const responseJson = await response.json();
    // console.log(responseJson)
    return responseJson;
  }
}
