function tips_view(msg, iconv, ishtml) {
  if (ishtml == '1') {
      Swal.fire({
          title: '',
          html: msg,
          confirmButtonText: 'Ok',
          customClass: 'q_tip_color',
          icon: iconv,
          //confirmButtonColor: "#ff1170"
      });
  } else {
      Swal.fire({
          title: '',
          text: msg,
          confirmButtonText: 'Ok',
          customClass: 'q_tip_color',
          icon: iconv,
          //confirmButtonColor: "#ff1170"
      });
  }
}

function pendingmsg(msg) {
  Swal.fire({
    customClass: 'q_tip_color',
    html: msg,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
    willClose: () => {
    }
  }).then((result) => {
  })
}

function view_0x(address) {
  var new_acc_a1 = address.substring(0, 6);
  var stringlength = address.length
  var new_acc_a2 = address.substring(stringlength - 5, stringlength);
  var new_acc1 = new_acc_a1 + '...' + new_acc_a2;
  return new_acc1;
}

function connok(){
  // $("#d3_conn").hide();        
  // $("#d3_mint").show();
  $("#d4_conn").hide();        
  $("#d4_nftex").show();
}

$(document)
  .ready(function() {

      var mintnft_flag=0;
      var cur_addr = '';
      const netid = 1;
      const lan_changenetid = 'Switch to ethereum mainnet';

      //ä»¥å¤ªä¸»ç½‘nft
      const contract_addr = "0xEC7972f53d96A6a2260F8460768f49B8721B6106";
      const contract_Abi = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_claimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_whitelistClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextOwnerToExplicitlySet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"publicMintflag","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"val","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"flag","type":"bool"}],"name":"setPublicMintTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"whiteMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]

      //å…‘æ¢åˆçº¦
      const contract_addr_nftex = "0xeeCdC3Ba0262f61BB3722B7653d89f72a131584F";
      const contract_Abi_nftex = [{"inputs":[{"internalType":"address","name":"nft_address","type":"address"},{"internalType":"address","name":"token_address","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Change","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"change","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"NFTAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"putNTF","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"quantity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setQuantity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"state","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"NFTAddress","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"takeNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
       if (typeof window.ethereum === "undefined") {
          $("#connect_to_metamask")
              .click(function() {
                  tips_view('Please install MetaMask', 'warning', '0');
              });
      } else {

          function check_acc(new_acc, cur_acc) {
              if (new_acc != cur_acc) {
                  connok();
                  checkApprovalForAll();
                  // $("#curent_addr").text(view_0x(new_acc));
                  //     $.ajax({
                  //       type: "GET",
                  //       dataType: "json",
                  //       url: "https://api.wooonen.org/?address="+new_acc, 
                  //       //data:'{"address":"'+new_acc+'""}',
                  //       data:'',
                  //         success: function (data){
                  //             if (data.amount>0) {
                  //                 $("#d3_mint").attr("class","d3");
                  //                 $("#mintnft").text('Click to mint');
                  //                 //$("#mintnft").removeAttr('disabled');
                  //                 mintnft_flag=1;
                  //             }else{
                  //                 $("#d3_mint").attr("class","d3n");
                  //                 $("#mintnft").text('Ineligible');
                  //                 mintnft_flag=0;
                  //             }
                  //         }
                  //     });
              }
          }

          function check_netid(_netid, netid, lan_changenetid) {
              if (_netid != netid) {
                  tips_view(lan_changenetid, 'warning', '0');
              }
          }
          ethereum.on('accountsChanged', function(accounts) {
              var new_acc = accounts[0];
              check_acc(new_acc, cur_addr);
              cur_addr = new_acc;
          })

          ethereum.on('networkChanged', function(networkIDstring) {
              var cur_netid = ethereum.networkVersion;
              check_netid(cur_netid, netid, lan_changenetid);
          })

          const provider = new ethers.providers.Web3Provider(window.ethereum)


          /**
           */
          $("#connect_to_metamask")
           .click(function() {
               connect_to_metamask();
           });
          async function connect_to_metamask() {
              const accounts = await provider.send("eth_requestAccounts", []);
              if (accounts && accounts.length > 0) {
                  let myAccountAddr = accounts[0];
                  //let balance = ethers.utils.formatEther(await provider.getBalance(myAccountAddr));
                  let network = await provider.getNetwork();
                  $("#curent_addr")
                      .text(view_0x(myAccountAddr));

                  check_netid(network.chainId, netid, lan_changenetid);
                  check_acc(myAccountAddr, cur_addr);
                  cur_addr = myAccountAddr;
              }
          }



          /*
           */
          $("#mintnft").click(function() {
                  mintnft();
              });
          async function mintnft() {
              let network = await provider.getNetwork();
              if (network.chainId != netid) {
                  console.log(network+'|'+netid);
                  tips_view(lan_changenetid, 'warning', '0');
              }else{
                  if(mintnft_flag==1){
                      $.ajax({
                        type: "GET",
                        dataType: "json",
                        url: "https://api.wooonen.org/?address="+cur_addr, 
                        data:'',
                          success: function (data){
                              if (data.amount>0) {
                                  //tips_view(data.amount+'//'+data.v+'//'+data.r+'//'+data.s,'info',1);
                                  const signer = provider.getSigner();
                                  const contract = new ethers.Contract(contract_addr, contract_Abi, signer);
                                  //publicMint(uint256 num,uint8 v, bytes32 r, bytes32 s)
                                  //var tx = await contract.publicMint(data.num,data.v,data.r,data.s)
                                  var tx = contract.publicMint(data.amount,data.v,data.r,data.s)
                                      .then((transaction) => {
                                          console.log('Transaction:', transaction);
                                          tips_view('Transaction in progress, please check NFT', 'warning', '0');
                                      })
                                      .catch((error) => {
                                          console.error('Error:', error.message);
                                          tips_view(error.data.message, 'warning', '0');
                                      });

                              // }else{                                        
                              //     $("#mintnft").setAttribute("class","d3n");
                              //     $("#mintnft").attr("disabled",true);
                              //     $("#mintnft").text('Ineligible');
                              //     tips_view('Ineligible','info',0);
                              }
                        }  
                      });
                  }
              }
          }




          //nft to token
          async function checkApprovalForAll() {
              //æ£€æŸ¥æ˜¯å¦æŽˆæƒ
              const contractNft = new ethers.Contract(contract_addr, contract_Abi, provider);
              var re = await contractNft.isApprovedForAll(cur_addr,contract_addr_nftex);//0x00
              console.log(re);
              if(re==false){
                  Swal.fire({
                    title: 'Please approve the NFT',
                    showCancelButton: true,
                    confirmButtonText: 'Approve',
                    customClass: 'q_tip_color',
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                          //æ‰§è¡ŒæŽˆæƒæ“ä½œ
                          const signer = provider.getSigner();
                          const contractNft = new ethers.Contract(contract_addr, contract_Abi,signer);
                          var tx = contractNft.setApprovalForAll(contract_addr_nftex, true)
                              .then((transaction) => {                                    
                                  console.log('Transaction:', transaction);
                                  //emit ApprovalForAll(_msgSender(), operator, approved);
                                  pendingmsg('transaction in progress...');
                                  // æŒç»­ç›‘å¬äº‹ä»¶
                                  contractNft.on('ApprovalForAll',(msgSender, operator, approved) => {
                                      console.log(msgSender, operator, approved);
                                      if(msgSender.toLowerCase()==cur_addr.toLowerCase()){
                                          swal.close();
                                          nft2token_input();
                                          //nft2token_change(tokenids);
                                      }
                                  });
                              })
                              .catch((error) => {
                                  console.error('Error:', error.message);
                                  tips_view(error.data.message, 'warning', '0');
                              });
                    }
                  })
              }
          }

          $("#nft_ex_btn").click(function() {
              nft2token_input();
          });
          async function nft2token_input() {
              //æ£€æŸ¥æ˜¯å¦æŽˆæƒ
              const contractNft = new ethers.Contract(contract_addr, contract_Abi, provider);
              var re = await contractNft.isApprovedForAll(cur_addr,contract_addr_nftex);//0x00
              console.log(re);
              if(re==true){
                  var candoit=1;
                  Swal.fire({
                    customClass: 'q_tip_color',
                    title: 'Enter NFT tokenId',
                    text: 'Multiple IDs separated by commas',
                    input: 'text',
                    inputAttributes: {
                      autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'confirm',
                    showLoaderOnConfirm: true,
                    preConfirm: (tokenids) => {
                      //console.log(tokenids);
                      tokenids.trim().split(',').forEach(function(v, i) {
                          console.log(v);
                          if(v>=0 && v<=9500){
                          }else{
                              candoit=0;
                              tips_view('tokenid:'+v+' error', 'warning', '0');
                          }
                      })
                      if(candoit==1){nft2token(tokenids);}
                    },
                    allowOutsideClick: () => !Swal.isLoading()
                  }).then((result) => {
                    // if (result.code) {
                    // }
                  })
              }else{
                  checkApprovalForAll();
              }
          }
          async function nft2token(tokenids) {
              let network = await provider.getNetwork();
              if (network.chainId != netid) {
                  console.log(network+'|'+netid);
                  tips_view(lan_changenetid, 'warning', '0');
              }else{
                  var tokenids_arr = tokenids.split(",");
                  const signer = provider.getSigner();
                  const contract = new ethers.Contract(contract_addr_nftex, contract_Abi_nftex, signer);
                  var tx = contract.change(tokenids_arr)
                      .then((transaction) => {
                          console.log('Transaction:', transaction);
                          tips_view('Transaction in progress, please check $wooo', 'info', '0');
                      })
                      .catch((error) => {
                          console.error('Error:', error.message);
                          tips_view(error.data.message, 'warning', '0');
                      });
              }
          }

      }
  });