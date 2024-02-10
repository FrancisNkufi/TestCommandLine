//Github Version Control using Terminal (Local Reposiory):  
/* 
This helps you save each version of your work to Github using command line to be able to fall back when required.
Ex : 

1. Create a folder in your pc using "mkdir" then create a text file using "touch" then open this text file 
using "code" then type a text then save.
==> now install git inside this folder using "git init" which will create an hidden git file

In order to start tracking this file version we need to add this file into a staging area. 
to check what currently in the staging area use "git status", this will show in red untracked files.

==> to track this file we created use "git add files.txt" with this, if we check the status again "git status"
this file will now show in green indicating that it being now tracked and ready to be commited.
if "git add" only it used from a directory, this will add all and track all files in this directory.

==> to commit this file under version control use (git commit -m "Complete Chapter 1") the -m allows you to 
add a message to the commit you have done. this message by convention must be in present tense. 

==> to see the commit done use "git log" this will show you by who and when this commit was done.

Let add 2 more file in this same directory and if you chect status, these 2 will be red as untracked until they
are added. 

==> To revert back : I have edited one of the files wrongly and want to revert back to last version : 
                    1. use "git checkout file.txt" and this will roll back to the last commited version.

Note you can check differences between previous versions of your files using "git diff file.txt"
Note you can check status to see that the changes made has not being commited yet.

==> to delete the git local repository completly use "rm -rf .git/" this will all be gone.
*/

//================================================================================================================

////Github Version Control using Terminal (Github Reposiory):  

/* 
1. Open Github and create a repository without ticking the "Add a readme file".
2. Use the command line instruction at the very bottom : 
    * 

3. Use command line to mention the external repository created by using (remote add origin "past Github repository url")
4. Now push your files in this repository using "git push -u origin main" (Origin is the name we created above and main is 
    the default github branch we created our external repository from).
*/
