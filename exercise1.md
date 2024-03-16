Language chosen: Python

### Linting: Ruff

A common linting tool for python is Ruff. Many open-source projects such as FastAPI, Hugging Face and Pandas utilize Ruff as their linter because of its speed; it is 10-100x faster than existing linters for python, such as Flake8. Ruff can be installed via a variety of package managers such as Homebrew and Conda. Once installed, ruff can be used as a formatter or a linter.

To use it as a linter, the following commands can be run:

```
ruff check . # Lint all files in the current directory (and any subdirectories).
ruff check path/to/code/ # Lint all files in `/path/to/code` (and any subdirectories).
ruff check path/to/code/\*.py # Lint all `.py` files in `/path/to/code`.
ruff check path/to/code/to/file.py # Lint `file.py`.
ruff check @arguments.txt # Lint using an input file, treating its contents as newline-delimited command-line arguments.
```

To use it as a formatter, the following commands can be run:

```
ruff format . # Format all files in the current directory (and any subdirectories).
ruff format path/to/code/ # Format all files in `/path/to/code` (and any subdirectories).
ruff format path/to/code/\*.py # Format all `.py` files in `/path/to/code`.
ruff format path/to/code/to/file.py # Format `file.py`.
ruff format @arguments.txt # Format using an input file, treating its contents as newline-delimited command-line arguments.
```

Ruff also offers configurations which allow users to run tests before comitting and also integrates well with github actions.

### Testing: Pytest

Pytest is a testing framework for python which makes it easy to write small and readable tests using assertions.
To get started, install pytest using pip:

`pip install -U pytest`

Create the test:

```
def func(x):
return x + 1

def test_answer():
assert func(3) == 5

```

Run test:

```
$ pytest
=========================== test session starts ============================
platform linux -- Python 3.x.y, pytest-8.x.y, pluggy-1.x.y
rootdir: /home/sweet/project
collected 1 item

test_sample.py F [100%]

================================= FAILURES =================================
**\*\***\*\***\*\***\_\_\_**\*\***\*\***\*\*** test_answer **\*\***\*\***\*\***\_\_\_\_**\*\***\*\***\*\***

    def test_answer():

>       assert func(3) == 5
>
> E assert 4 == 5
> E + where 4 = func(3)

test_sample.py:6: AssertionError
========================= short test summary info ==========================
FAILED test_sample.py::test_answer - assert 4 == 5
============================ 1 failed in 0.12s =============================
```

### Building: Poetry

Poetry is a packaging and dependency management tool for python. Like NPM, it offers version management, building and publishing aswell:

```
$ poetry add pendulum

Using version ^2.0.5 for pendulum

Updating dependencies
Resolving dependencies... (1.5s)

Package operations: 4 installs, 0 updates, 0 removals

- Installing six (1.13.0): Downloading... 25%
- Updating pytzdata (2019.3 -> 2020.4): Installing...
- Installing pendulum (2.0.5)

Writing lock file
```

Building:

```
$ poetry build

Building poetry (1.0.0)

- Building sdist
- Built poetry-1.0.0.tar.gz

- Building wheel
- Built poetry-1.0.0-py2.py3-none-any.whl
```

```
Publishing:
$ poetry publish

Publishing poetry (1.0.0) to PyPI

- Uploading poetry-1.0.0.tar.gz 100%
- Uploading poetry-1.0.0-py2.py3-none-any.whl 58%

Tracking dependencies:
$ poetry show --tree
requests-toolbelt 0.8.0 A utility belt for advanced users...
└── requests <3.0.0,>=2.0.1
├── certifi >=2017.4.17
├── chardet >=3.0.2,<3.1.0
├── idna >=2.5,<2.7
└── urllib3 <1.23,>=1.21.1

$ poetry show --latest
pendulum 2.0.4 1.4.5 Python datetimes made easy.
django 1.11.11 2.0.3 A high-level Python Web framework ...
requests 2.18.4 2.18.4 Python HTTP for Humans.
```

### CI Alternatives:

Gitlab CI: CI tool used for projects hosted on GitLab.
Atlassian Bamboo: CI/CD tool offered by atlassian
AWS CodePipeline: Similar to The above tools, this is another CI/CD tool offered by AWS

All of the above CI tools offer cloud-based and self-hosted setups. A cloud based solution would work well in this case since the build tools are not that complicated.
