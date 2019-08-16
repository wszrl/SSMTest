package Controller;

import Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/*
 *@autho  zhengruilong
 *@date 2019-08-08
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserServices userservices;

    //登陆找用户名
    @RequestMapping(value = "/findLoginname" ,method= RequestMethod.GET)
   public void findName(@RequestParam String username, ModelMap map){
       int bool=userservices.findByName(username);
       if(bool==1){
           map.addAttribute("date","true");
       }else{
           map.addAttribute("date","false");
       }

   }

    @RequestMapping(value = "/findLoginpass" ,method= RequestMethod.GET)
    public void findPassByname(@RequestParam String password, ModelMap map){
        int bool=userservices.findByName(password);
        if(bool==1){
            map.addAttribute("date","true");
        }else{
            map.addAttribute("date","false");
        }

    }

}
