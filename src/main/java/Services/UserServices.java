package Services;

import mapper.userMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/*
 *@autho  zhengruilong
 *@date 2019-08-08
 */
@Service("userservices")
public class UserServices implements userMapper {
      @Autowired
       userMapper userMapper;
    public int findByName(String name){
        return userMapper.findByName(name);

    }

    public int findPassByname(String name) {
        return userMapper.findPassByname(name);
    }
}
