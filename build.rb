
def getBuildFiles(directory)
	# hash key is file name (path to file not included). hash value is contents of file
	buildFiles = Hash.new()
	Dir.glob("#{directory}") do |filepath|
		if filepath.split(//).last(10).join("").to_s == "build.html"
			buildFile = File.open(filepath, "rb")
			buildFileContents = buildFile.readlines
			buildFileContents.map! { |element|
			   element.gsub(/\r\n?/,"")
			}
			# key is everything after final slash
			key = filepath.split('/')[-1]
			buildFiles[key] = buildFileContents
		end
	end
	return buildFiles
end

# any file with 2 references to a build file eg: <!-- header.build.html -->, will have all code in between the comments replaced with 
#    whatever is in the build file
def main()
	path = "*.*"
	buildFiles = getBuildFiles(path)
	if buildFiles.size == 0
		puts "No build files"
		return
	end

	Dir.glob("#{path}") do |filepath|
		if filepath.split(//).last(5).join("").to_s == ".html" and filepath.split(//).last(10).join("").to_s != "build.html"
			buildFiles.each { |buildFileName, buildFileContent| 
				# count number of times buildFileName is found in file
				numFound = 0
				IO.readlines(filepath).map do |line|
				  if line.index(buildFileName)
				  	numFound = numFound + 1
				  end
				end

				if numFound == 2
					puts buildFileName + " updating " + filepath
					started = false
					finished = false
					lines = []
					IO.readlines(filepath).map do |line|
						if finished or not started
							lines.push(line)
						end
						if line.index(buildFileName)
							if started
								lines.push(buildFileContent)
								lines.push(line)
								finished = true
							else
								started = true
							end
						end
					end
					File.open(filepath, "w+") do |f|
					  f.puts(lines)
					end
				elsif numFound > 0
					puts 'Error in ' + filepath + ': There should be 2 separate lines with ' + buildFileName + ', but there are ' + numFound.to_s
				end
			}	
		end
	end
end


main()