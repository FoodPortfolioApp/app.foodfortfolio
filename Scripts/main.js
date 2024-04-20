////////////////////////////////////////////////////////////////////////

///************THIS JS FILE IS NOT USED ANYWHERE FOR THIS PROJECT *////

///////////////////////////////////////////////////////////////////////

/*function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }*/

  window.onload = function() {
  var image1 = document.getElementById("image1");
  var images1 = ["Images/LeftLayout/LeftLayoutSet1_2.jpg", "Images/LeftLayout/LeftLayoutSet1_3.jpeg", "Images/LeftLayout/LeftLayoutSet1_4.jpeg", "Images/LeftLayout/LeftLayoutSet1_1.jpg"];
  
  var image2 = document.getElementById("image2");
  var images2 = ["Images/LeftLayout/LeftLayoutSet2_2.jpg", "Images/LeftLayout/LeftLayoutSet2_3.jpg", "Images/LeftLayout/LeftLayoutSet2_4.jpg", "Images/LeftLayout/LeftLayoutSet2_1.jpg"];
  
  var image3 = document.getElementById("image3");
  var images3 = ["Images/LeftLayout/LeftLayoutSet3_2.jpg", "Images/LeftLayout/LeftLayoutSet3_3.jpg", "Images/LeftLayout/LeftLayoutSet3_4.jpg", "Images/LeftLayout/LeftLayoutSet3_1.jpg"];
  
  var image4 = document.getElementById("image4");
  var images4 = ["Images/LeftLayout/LeftLayoutSet4_2.jpg", "Images/LeftLayout/LeftLayoutSet4_3.jpg", "Images/LeftLayout/LeftLayoutSet4_4.jpg", "Images/LeftLayout/LeftLayoutSet4_1.jpg"];
  
  var image5 = document.getElementById("image5");
  var images5 = ["Images/LeftLayout/LeftLayoutSet5_2.jpg", "Images/LeftLayout/LeftLayoutSet5_3.jpg", "Images/LeftLayout/LeftLayoutSet5_4.jpg", "Images/LeftLayout/LeftLayoutSet5_1.jpg"];
  
  var index1 = 0,index2 = 0,index3 = 0,index4 = 0,index5 = 0;

  setInterval(updateImage1, 1000);
  setInterval(updateImage2, 1000);
  setInterval(updateImage3, 1000);
  setInterval(updateImage4, 1000);
  setInterval(updateImage5, 1000);
  
  function updateImage1() {
  
  image1.src = images1[index1];
  
  index1 = (index1 + 1) % images1.length;
  
  }

  function updateImage2() {
  
    image2.src = images2[index2];
    
    index2 = (index2 + 1) % images2.length;
    
    }

    function updateImage3() {
  
        image3.src = images3[index3];
        
        index3 = (index3 + 1) % images3.length;
        
        }

        function updateImage4() {
  
            image4.src = images4[index4];
            
            index4 = (index4 + 1) % images4.length;
            
            }

            function updateImage5() {
  
                image5.src = images5[index5];
                
                index5 = (index5 + 1) % images5.length;
                
                }
  

}