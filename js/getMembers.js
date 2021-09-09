// import tokens from './tokens'

const GitHub = require('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');
 
var gh = new GitHub({
  token: '<token>',
});

var getOrganizationMembers = (orgnization, page = 1, members = []) => {
  return gh.getOrganization(orgnization).listMembers({ page: page }).then(res => {
    members = members.concat(res.data);

    if (res.headers.link.split(",").filter(l => l.match(/rel="next"/)).length > 0) {
      return getOrganizationMembers(orgnization, page+1, members);
    }

    return Promise.resolve(members);
  });
};

getOrganizationMembers("<org_name>").then(members => {
  const data = members.map((m, i) => {
    return `${m.id}\t${m.login}\t=IMAGE("${m.avatar_url}")\t${m.type}`
  }).join("\n");
//   console.log(data);
  document.getElementById("result").innerHTML = `<img src="${data.avatar_url}"/>`
});