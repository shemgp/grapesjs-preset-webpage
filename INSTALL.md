# How to install in Bitnami WAPP Stack in Windows

1. Download and Install [Git for Windows](https://github.com/git-for-windows/git/releases/download/v2.16.2.windows.1/Git-2.16.2-64-bit.exe).
2. Run Git Bash App.
3. On the Git Bash App type:
    ```bash
    cd /c/Bitnami/wappsta->/apache2/htdocs
    ```
    where `->` is the tab key.
4. Continuing on the Git Bash App: clone [GrapesJS Preset Webpage: Shemgp's Version](https://github.com/shemgp/grapesjs-preset-webpage) by running the following commands:
    ```
    git clone https://github.com/shemgp/grapesjs-preset-webpage.git grapesjs
    cd grapesjs
    git submodule init
    git submodule update --remote
    ```
    It will be done when the prompt (`$`) shows up again.
5. You may then visit http://localhost/grapesjs/ (using any browser. eg. Firefox or Google Chrome) to use GrapesJS with Boostrap4.
