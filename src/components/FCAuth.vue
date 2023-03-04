<template>
  <div class="FC"></div>
  <!-- <FCAuth>agentid</FCAuth> -->
  <h2>{{ agentdata }}</h2>
</template>

<script>
export default {
  name: "FC",
  //   props: {
  //     msg: String,
  //   },
  data() {
    return {
      agentid: "12345",
      firstname: "John",
      lastname: "Doe",
      role: "Agent",
      agentdata: {},
    };
  },
  created() {
    //--------------------------------
    //query string
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri.toLowerCase());
    //console.log(params.get("AgentId"));
    if (
      params.has("agentid") &&
      params.has("firstname") &&
      params.has("lastname")
    ) {
      this.agentdata = params;
      console.log(params.has("agentid"));
      this.agentid = params.get("agentid");
      this.firstname = params.get("firstname");
      this.lastname = params.get("lastname");
      this.role = params.has("role") ? params.get("role") : "";
    } else {
      this.agentdata = [
        "Incomplete required parameter list - agentid,firstname,lastname",
      ];
      console.log(
        "Incomplete required parameter list - agentid,firstname,lastname"
      );
    }
    //query string
    //browser var

    var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    //var idpUrl = "https://worksitebilling.globelifeln.com";

    this.$cookies.set("temp", "expiring time", {
      expires: inFifteenMinutes,
    });
    console.log(this.$cookies.get("temp"));
    console.log(this.$cookies.get("username"));
    // //window.location.replace(`${idpUrl}?${queryString}`)
    // const queryParams = {
    //   idpUrl: "https://worksitebilling.globelifeln.com/",
    //   tempCookie: this.$cookies.get("temp"),
    // };
    // const queryString = new URLSearchParams(queryParams).toString();
    // console.log(queryString);
    // // window.location.replace(`${idpUrl}?${queryString}`);
    //browser var
    //--------------------------------
    // fetch("http://localhost:8080/fcauth/")
    //   .then((response) => response.json())
    //   .then((data) => (this.agentdata = data));
    ////console.log(this.agentdata);
    //--------------------------------
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title: "Vue POST Request Example" }),
    // };
    // fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => (this.agentdata = data));
    //--------------------------------
  },
  //   methods: {
  //     getAgentDetails() {
  //       const queryStringParameters = {agentID:, firstname:,lastname:, Role: };
  //       const queryString = new URLSearchParams(queryStringParameters).toString();
  //       console.log(queryString);
  //     },
  //   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
