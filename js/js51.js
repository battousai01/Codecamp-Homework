const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
      }
    }
  };
  
  const product2 = {}
  product2.province = product1.distributor.address.province;
  
  console.log("province of product1:",product1.distributor.address.province);
  console.log("product2.province:",product2.province);