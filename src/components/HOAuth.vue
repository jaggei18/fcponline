<template>
  <div class="HO"></div>
</template>

<script>
export default {
  name: "HO",
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
    // let uri = window.location.href.split("?");
    // if (uri.length == 2) {
    //   let vars = uri[1].split("&");
    //   let getVars = {};
    //   let tmp = "";
    //   vars.forEach(function (v) {
    //     tmp = v.split("=");
    //     if (tmp.length == 2) getVars[tmp[0]] = tmp[1];
    //   });
    //   console.log(getVars);
    ///////test
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
      //this.agentid = params("agentid");
      //   this.firstname = params("firstname");
      //   this.lastname = params("lastname");
      //   this.role = params.has("role") ? params("role") : "";
    } else {
      this.agentdata = [
        "Incomplete required parameter list - agentid,firstname,lastname",
      ];
      console.log(
        "Incomplete required parameter list - agentid,firstname,lastname"
      );
    }
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
