package com.craftcoder.sftp;

import com.craftcoder.sftp.service.SftpService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.validation.constraints.AssertTrue;
import java.io.File;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SftpApplicationTests {

    @Autowired
    private SftpService sftpService;

    @Test
    public void uploadFile() {
        File file = new File("D:/temp/diveng.conf");
        sftpService.uploadFile(file);
        Assert.assertTrue(sftpService.existFile("/root/chai/sftp-file/diveng.conf"));
    }

    @Test
    public void downLoadFile(){
        File downloadFile = sftpService.downloadFile("/root/chai/sftp-file/diveng.conf", "D:/temp/diveng.conf_download");
        Assert.assertTrue(downloadFile.exists());
    }

    @Test
    public void deleteFile(){
        Assert.assertTrue(sftpService.deleteFile("/root/chai/sftp-file/diveng.conf"));
        Assert.assertTrue(!sftpService.existFile("/root/chai/sftp-file/diveng.conf"));
    }

}
