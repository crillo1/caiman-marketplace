export const networkCollections = {
  "0x13881": [
    //Add Your Collections here
    {
      image:
        "https://lh3.googleusercontent.com/BWCni9INm--eqCK800BbRkL10zGyflxfPwTHt4XphMSWG3XZvPx1JyGdfU9vSor8K046DJg-Q8Y4ioUlWHiCZqgR_L00w4vcbA-w=s0",
      name: "Test Mages",
      addrs: "0x275d553f426355c20b134D944B5b28D31CDb83DA",
    },
    {
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmfLbpeVHxReWKNLaXTPcWiafi49eoAL4gRwMGuXtx2Eqe/images/14.png",
      name: "Pixel Show",
      addrs: "0xCA34404dD8Bd6537BE76F3A51B379F8949bD7973",
    },
  ],

  "0x1": [
    {
      image:
        "https://i.ibb.co/3CCLbzS/cai365.png",
      name: "Caiman #3487",
      addrs: "0x0000000",
    },
    {
      image:
        "https://i.ibb.co/HKfkCTJ/cai710.png",
      name: "Caiman #3142",
      addrs: "0x0000000",
    },
    {
      image:
        "https://i.ibb.co/QPV5bbx/cai555.png",
      name: "Caiman #467",
      addrs: "0x0000000",
    },
    {
      image:
        "https://i.ibb.co/bgWSwRW/cai3666.png",
      name: "Caiman #722",
      addrs: "0x0000000",
    },
    {
      image:
        "https://i.ibb.co/WxHV3kb/cai5555.png",
      name: "Caiman #996",
      addrs: "0x0000000",
    },
    {
      image:
        "https://i.ibb.co/PxxgQpZ/cai999.png",
      name: "Caiman #5111",
      addrs: "0x0000000",
    },
  ],
};

export const getCollectionsByChain = (chain) => networkCollections[chain];
